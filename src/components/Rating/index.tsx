import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { CommentCount, StarContainer } from './style';

type RatingReadOnlyProps = {
  value: number;
  size?: number;
  color?: string;
  count?: number;
};

export default function RatingReadOnly({
  value,
  size = 20,
  color = '#CFC248',
  count,
}: RatingReadOnlyProps) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <StarContainer>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <IoStar key={`full-${i}`} size={size} color={color} />
          ))}
        {hasHalfStar && <IoStarHalf size={size} color={color} />}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <IoStarOutline key={`empty-${i}`} size={size} color={color} />
          ))}
      </StarContainer>
      <CommentCount>
        <span>
          {value.toLocaleString('pt-BR')} ({count} comentários)
        </span>
      </CommentCount>
    </div>
  );
}
