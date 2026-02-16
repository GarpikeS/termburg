import { useState } from 'react';
import { X, CheckCircle, Phone } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function PurchaseModal() {
  const { purchaseOpen, purchaseItem, closeModal } = useBooking();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setStep('form');
      setName('');
      setPhone('');
      setEmail('');
    }, 300);
  };

  if (!purchaseOpen || !purchaseItem) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 rounded-t-2xl">
          <h2 className="font-heading text-xl font-bold text-gray-900">Оформить заказ</h2>
          <button onClick={handleClose} className="rounded-lg p-1.5 hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Товар */}
            <div className="rounded-xl bg-[#FAF6E8] border border-[#E0D9C8] px-5 py-4">
              <p className="text-sm text-gray-500">Товар</p>
              <p className="font-medium text-gray-900">{purchaseItem.name}</p>
              <p className="mt-1 text-xl font-bold text-[#BA9B4F]">{purchaseItem.price}</p>
            </div>

            {/* Контактные данные */}
            <div className="space-y-3">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#BA9B4F] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#A88A3D] active:bg-[#9A7F35]"
            >
              Оформить заказ
            </button>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-gray-900">Заказ оформлен!</h3>
            <p className="mb-6 text-gray-600">
              Мы свяжемся с вами для подтверждения и оплаты.
            </p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-[#FAF6E8] px-5 py-3">
              <Phone className="h-4 w-4 text-[#BA9B4F]" />
              <a href="tel:+74959220222" className="font-medium text-gray-900">
                +7 (495) 922-02-22
              </a>
            </div>
            <div>
              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-[#BA9B4F] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#A88A3D]"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
