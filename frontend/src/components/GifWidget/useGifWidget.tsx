import axios from "axios";
import { GifListImage } from "components/GifWidget/GifWidget.styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface IGifList {
    id: string;
    images: Record<
        string,
        {
            url: string;
        }
    >;
}

const useGifWidget = (toggleGifWidgetVisibility: () => void) => {
    const [gifsIsLoading, setGifsIsLoading] = useState(true);
    const [gifList, setGifList] = useState<IGifList[]>([]);
    const [gifSearchInput, setGifSearchInput] = useState("");

    const ref = useRef(null);

    const findGif = (event: ChangeEvent<HTMLInputElement>) => {
        setGifSearchInput(event.target.value);
        setGifsIsLoading(true);
    };

    const fetchGifs = () =>
        gifList.map(item => (
            <GifListImage
                key={item.id}
                src={item.images.fixed_height_downsampled.url}
                onClick={() => console.log()} //item.images.fixed_height.url
            />
        ));

    useEffect(() => {
        const getGifsList = async () => {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_GIPHY_KEY}&q=${gifSearchInput}&limit=50&rating=r&lang=pl&bundle=messaging_non_clips`
            );
            setGifList(response.data.data);
        };

        getGifsList();
        setGifsIsLoading(false);
    }, [gifSearchInput]);

    useOnClickOutside(ref, toggleGifWidgetVisibility);

    return {
        gifsIsLoading,
        gifList,
        fetchGifs,
        findGif,
        gifSearchInput,
        ref
    };
};

export default useGifWidget;
