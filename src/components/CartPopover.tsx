import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FoodItem } from "@/types/menu";

interface CartItem {
  item: FoodItem;
  quantity: number;
}

interface CartPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (itemId: string, change: number) => void;
  getTotalPrice: () => number;
}

export const CartPopover = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  getTotalPrice,
}: CartPopoverProps) => {
  if (!isOpen) return null;

  const handleContinueShopping = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4 overflow-auto">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md border-4 border-accent my-auto">
        {/* Header */}
        <div className="p-6 border-b-2 border-accent flex justify-between items-center">
          <h3 className="text-2xl font-bold text-primary">Mijn Winkelmand</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-primary hover:text-accent p-1"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Je winkelmand is leeg
            </p>
          ) : (
            cartItems.map(({ item, quantity }) => (
              <div key={item.id} className="flex items-center gap-4">
                <img
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover border-2 border-accent"
                  src={item.image}
                />
                <div className="flex-grow">
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">€{item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-6 h-6 p-0 rounded-full"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-bold text-primary">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-6 h-6 p-0 rounded-full"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <p className="font-bold text-lg text-primary">
                  €{(item.price * quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-card/50 border-t-2 border-accent">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg text-muted-foreground">Subtotaal</p>
              <p className="text-xl font-bold text-primary">
                €{getTotalPrice().toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                variant="golden"
                size="lg"
                className="w-full font-bold"
              >
                Afrekenen
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full font-bold"
                onClick={handleContinueShopping}
              >
                Verder winkelen
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};