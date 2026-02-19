import { createContext, useContext, useState, type ReactNode } from 'react';
import type { BathType } from '@/data/thermalZones';

interface PurchaseItem {
  name: string;
  price: string;
  childPrice?: string;
}

interface BookingContextType {
  bookingOpen: boolean;
  purchaseOpen: boolean;
  purchaseItem: PurchaseItem | null;
  bathDetailOpen: boolean;
  selectedBath: BathType | null;
  openBooking: () => void;
  openPurchase: (item: PurchaseItem) => void;
  openBathDetail: (bath: BathType) => void;
  closeBathDetail: () => void;
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
  const [bathDetailOpen, setBathDetailOpen] = useState(false);
  const [selectedBath, setSelectedBath] = useState<BathType | null>(null);

  const openBooking = () => {
    setPurchaseOpen(false);
    setBathDetailOpen(false);
    setBookingOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const openPurchase = (item: PurchaseItem) => {
    setBookingOpen(false);
    setBathDetailOpen(false);
    setPurchaseItem(item);
    setPurchaseOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const openBathDetail = (bath: BathType) => {
    setBookingOpen(false);
    setPurchaseOpen(false);
    setSelectedBath(bath);
    setBathDetailOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBathDetail = () => {
    setBathDetailOpen(false);
    setSelectedBath(null);
    document.body.style.overflow = '';
  };

  const closeModal = () => {
    setBookingOpen(false);
    setPurchaseOpen(false);
    setPurchaseItem(null);
    setBathDetailOpen(false);
    setSelectedBath(null);
    document.body.style.overflow = '';
  };

  return (
    <BookingContext.Provider
      value={{
        bookingOpen,
        purchaseOpen,
        purchaseItem,
        bathDetailOpen,
        selectedBath,
        openBooking,
        openPurchase,
        openBathDetail,
        closeBathDetail,
        closeModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
