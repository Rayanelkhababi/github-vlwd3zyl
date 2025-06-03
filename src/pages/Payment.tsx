import React, { useState } from 'react';
import { CreditCard, Palette as Paypal, ArrowRight } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Payment</h1>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <button
                className={`p-4 rounded-lg border ${
                  paymentMethod === 'card'
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-700'
                } flex flex-col items-center`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard className="w-8 h-8 mb-2" />
                <span>Card</span>
              </button>
              <button
                className={`p-4 rounded-lg border ${
                  paymentMethod === 'paypal'
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-700'
                } flex flex-col items-center`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <Paypal className="w-8 h-8 mb-2" />
                <span>PayPal</span>
              </button>
              <button
                className={`p-4 rounded-lg border ${
                  paymentMethod === 'transfer'
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-700'
                } flex flex-col items-center`}
                onClick={() => setPaymentMethod('transfer')}
              >
                <ArrowRight className="w-8 h-8 mb-2" />
                <span>Transfer</span>
              </button>
            </div>

            <form className="space-y-6">
              {paymentMethod === 'card' && (
                <>
                  <div>
                    <label className="block mb-2">Card Number</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">CVC</label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center py-8">
                  <p className="mb-4">You will be redirected to PayPal to complete your payment</p>
                </div>
              )}

              {paymentMethod === 'transfer' && (
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Bank Transfer Details</h3>
                  <div className="space-y-2">
                    <p>Bank: Example Bank</p>
                    <p>Account Name: AI Automation</p>
                    <p>IBAN: NL00ABCD1234567890</p>
                    <p>BIC: ABCDNL2A</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Complete Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;