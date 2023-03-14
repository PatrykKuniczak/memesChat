import { SetStateAction, useEffect, useState } from "react";
import {
    GifWidgetStyled,
    GifWidgetSearch,
    GifList,
    GifListImage,
    GifWidgetAtrtibutionSection,
    GiphyAttributionLogo
} from "./GifWidget.styled";
import axios from "axios";
import GiphyAttributionLogoImage from "assets/GiphyAttributionLogo.png";

interface IGifWidget {
    id: string;
    images: Record<
        string,
        {
            url: string;
        }
    >;
}

const GifWidget = () => {
    const [gifsLoading, setGifsLoading] = useState(true);
    const [gifList, setGifList] = useState<IGifWidget[]>([]);
    const [gifSearchInput, setGifSearchInput] = useState("");

    const findGif = (event: { target: { value: SetStateAction<string> } }) => {
        setGifSearchInput(event.target.value);
        setGifsLoading(true);
    };

    const getGifUrl = (fullGifUrl: string) => {
        // image url which should be passed into chat box
        const gifObject = {
            content: fullGifUrl,
            isImage: true
        };
        console.log("gif object", gifObject);
    };

    const renderGifs = () => (
        <>
            <GifWidgetSearch
                type="text"
                value={gifSearchInput}
                onChange={findGif}
                placeholder="find gif"
            />
            <GifList>
                {!gifsLoading &&
                    gifList.map((item, index) => (
                        <GifListImage
                            key={item.images.preview_gif.url}
                            src={item.images.preview_gif.url}
                            onClick={() =>
                                getGifUrl(item.images.downsized_large.url)
                            }
                        />
                    ))}
            </GifList>
        </>
    );

    useEffect(() => {
        const getGifsList = async () => {
            if (gifSearchInput.length > 2) {
                const response = await axios.get(
                    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_GIPHY_KEY}&q=${gifSearchInput}&limit=18&rating=g&lang=en`
                );
                setGifList(response.data.data);
            }
        };
        getGifsList();
        setGifsLoading(false);
    }, [gifSearchInput]);

    return (
        <>
            <GifWidgetStyled>
                {renderGifs()}
                <GifWidgetAtrtibutionSection>
                    <span>Powered by</span>
                    <GiphyAttributionLogo
                        src={GiphyAttributionLogoImage}
                        alt="Powered by Giphy"
                    />
                </GifWidgetAtrtibutionSection>
            </GifWidgetStyled>
        </>
    );
};

export default GifWidget;
