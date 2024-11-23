import PlayButton from '@/assets/Play.svg'
import Image from 'next/image';

interface LikeButtonProps {
  onLike: () => void;
}

const VideoButton: React.FC<LikeButtonProps> = ({ onLike }) => {
  return (
    <Image className='cursor-pointer' onClick={onLike} src={PlayButton} alt="play" />
  );
};

export default VideoButton;
