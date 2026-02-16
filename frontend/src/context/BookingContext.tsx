import { createContext, useContext, useState, type ReactNode } from 'react';

interface PurchaseItem {
  name: string;
  price: string;
}

interface BookingContextType {
  bookingOpen: boolean;
  purchaseOpen: boolean;
  purchaseItem: PurchaseItem | null;
  openBooking: () => void;
  openPurchase: (item: PurchaseItem) => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchaseItem, setPurchaseItem] = useState<PurchaseItem | null>(null);

  const openBooking = () => {
    setPurchaseOpen(false);
    setBookingOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const openPurchase = (item: PurchaseItem) => {
    setBookingOpen(false);
    setPurchaseItem(item);
    setPurchaseOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setBookingOpen(false);
    setPurchaseOpen(false);
    setPurchaseItem(null);
    document.body.style.overflow = '';
  };

  return (
    <BookingContext.Provider
      value={{ bookingOpen, purchaseOpen, purchaseItem, openBooking, openPurchase, closeModal }}
    >
      {children}
    </BookingContext.Provider>
  );
}
