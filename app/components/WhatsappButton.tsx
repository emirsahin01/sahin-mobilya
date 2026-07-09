import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/905333527951"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
}