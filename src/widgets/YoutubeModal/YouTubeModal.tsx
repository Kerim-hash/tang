import Modal from "@/shared/ui/Modal/Modal";

interface YouTubeModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({ isOpen, onClose, videoId }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full h-full relative">
        <div className="absolute top-0 left-0 w-full h-full">
          {videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default YouTubeModal;
