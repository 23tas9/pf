import IconStar from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/star.tsx"
import IconStarFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/star-filled.tsx"

export default function StarRating({ rating }){
    // 星の数に応じた配列を作成 (例: rating = 3 なら [0, 1, 2])
    const stars = Array.from({ length: 5 }, (_, index) => index);

    return (
        <div>
            {stars.map((_) => {
                if(_ < rating) {
                    return <IconStarFilled class="w-6 h-6 inline-block" />
                }else{
                    return <IconStar class="w-6 h-6 inline-block" />;
                }
            })}
        </div>
    );
};