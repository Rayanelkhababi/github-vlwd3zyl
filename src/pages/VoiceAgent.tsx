import React, { useEffect, useState } from 'react';
import Vapi from '@vapi-ai/web';
import { Mic, MicOff, Volume2 } from 'lucide-react';

const VoiceAgent = () => {
  const [vapi, setVapi] = useState<any>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [status, setStatus] = useState('Click Start to begin conversation');

  useEffect(() => {
    const vapiInstance = new Vapi('2eda6ba9-008b-40ea-a91b-b5faee07294d');

    vapiInstance.on('call-start', () => {
      setStatus('Call started');
      setIsCallActive(true);
    });

    vapiInstance.on('call-end', () => {
      setStatus('Call ended');
      setIsCallActive(false);
    });

    vapiInstance.on('speech-start', () => {
      setStatus('Gina is speaking...');
    });

    vapiInstance.on('speech-end', () => {
      setStatus('Listening...');
    });

    vapiInstance.on('volume-level', (volume: number) => {
      setVolumeLevel(volume);
    });

    vapiInstance.on('error', (error: Error) => {
      console.error('Vapi error:', error);
      setStatus('Error occurred');
    });

    setVapi(vapiInstance);

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  const startCall = async () => {
    try {
      await vapi.start('77a73310-965a-458a-8546-07fb00c53396', {
        recordingEnabled: false,
      });
    } catch (error) {
      console.error('Error starting call:', error);
      setStatus('Failed to start call');
    }
  };

  const stopCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  const toggleMute = () => {
    if (vapi) {
      const newMutedState = !isMuted;
      vapi.setMuted(newMutedState);
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Meet Gina - Your AI Assistant</h1>
            <p className="text-xl text-gray-300">
              Have a natural conversation with Gina about our AI automation solutions
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex flex-col items-center space-y-8">
              <div className="relative">
                <div className={`w-32 h-32 rounded-full bg-blue-500/20 flex items-center justify-center ${isCallActive ? 'animate-pulse' : ''}`}>
                  {isCallActive ? (
                    <Volume2 className="w-16 h-16 text-blue-500\" style={{ opacity: 0.2 + volumeLevel * 0.8 }} />
                  ) : (
                    <Mic className="w-16 h-16 text-blue-500" />
                  )}
                </div>
                {isCallActive && (
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-blue-500"
                    style={{
                      transform: `scale(${1 + volumeLevel * 0.5})`,
                      opacity: 0.2 + volumeLevel * 0.8,
                      transition: 'all 0.1s ease-out'
                    }}
                  />
                )}
              </div>

              <div className="text-center">
                <p className="text-xl mb-2">{status}</p>
                <p className="text-gray-400 text-sm">
                  {isCallActive ? 'Speak naturally with Gina' : 'Click Start to begin your conversation'}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={isCallActive ? stopCall : startCall}
                  className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                    isCallActive
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  {isCallActive ? 'End Call' : 'Start Call'}
                </button>

                {isCallActive && (
                  <button
                    onClick={toggleMute}
                    className={`px-4 py-3 rounded-full transition-colors ${
                      isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">1</span>
                Click "Start Call\" to begin your conversation with Gina
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">2</span>
                Speak naturally about our AI automation solutions
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">3</span>
                Use the mute button if you need to pause your microphone
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">4</span>
                Click "End Call\" when you're finished
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;