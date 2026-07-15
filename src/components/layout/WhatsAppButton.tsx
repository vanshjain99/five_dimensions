export default function WhatsAppButton() {
  const phoneNumber = '919711193630';
  const message = 'Hello Five Dimensions, I would like to know more about your property advisory services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 md:bottom-8 md:left-8 md:h-10 md:w-10"
      style={{
        backgroundColor: '#25D366',
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
      }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current md:h-6 md:w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.63 2.052 14.155.855 11.57.855 6.133.855 1.708 5.224 1.704 10.652c-.001 1.728.455 3.417 1.32 4.908l-.993 3.629 3.73-.977c1.472.8 3.047 1.22 4.673 1.22l.004-.002zm11.758-6.848c-.347-.174-2.054-1.014-2.369-1.129-.317-.115-.548-.174-.779.174-.23.347-.89 1.129-1.092 1.36-.202.23-.404.26-.75.085-.347-.174-1.464-.539-2.787-1.72-1.028-.918-1.722-2.052-1.923-2.4-.202-.347-.021-.534.153-.708.156-.156.347-.405.52-.608.174-.203.23-.347.347-.579.115-.23.058-.435-.029-.608-.086-.174-.779-1.88-1.067-2.574-.28-.675-.565-.584-.779-.595-.2-.01-.43-.01-.66-.01-.23 0-.605.087-.922.434-.317.347-1.21 1.184-1.21 2.887 0 1.702 1.239 3.345 1.412 3.577.174.23 2.438 3.725 5.906 5.22.825.356 1.47.568 1.97.727.828.263 1.58.226 2.176.137.663-.099 2.055-.84 2.343-1.652.29-.812.29-1.506.202-1.652-.088-.146-.318-.233-.665-.407z" />
      </svg>
    </a>
  );
}
