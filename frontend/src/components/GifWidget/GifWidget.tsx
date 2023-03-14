import { SetStateAction, useEffect, useState } from "react";
import {
    GifWidgetStyled,
    GifWidgetContent,
    GifWidgetSearch,
    GifList,
    GifListImage,
    GifWidgetAtrtibutionSection,
    GiphyAttributionLogo
} from "./GifWidget.styled";
import axios from "axios";
import GiphyAttributionLogoImage from "assets/GiphyAttributionLogo.png";

const GifWidget = () => {
    const [gifsLoading, setGifsLoading] = useState(true);
    const [gifList, setGifList] = useState<any[]>([]);
    const [gifSearchInput, setGifSearchInput] = useState("");

    const findGif = (e: { target: { value: SetStateAction<string> } }) => {
        setGifSearchInput(e.target.value);
        setGifsLoading(true);
    };

    const getGifUrl = (fullGifUrl: string) => {
        // image url which should be passed into chat box
        console.log("image url", fullGifUrl);
    };

    const renderGifs = () => (
        <GifWidgetContent>
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
                            key={index}
                            src={item.images.preview_gif.url}
                            onClick={() =>
                                getGifUrl(item.images.downsized_large.url)
                            }
                        />
                    ))}
            </GifList>
        </GifWidgetContent>
    );

    useEffect(() => {
        gifSearchInput.length > 2 &&
            axios
                .get(
                    `https://api.giphy.com/v1/gifs/search?api_key=0kVBw2UV1wx2rzelZSio79c1iKQqdZpt&q=${gifSearchInput}&limit=18&offset=0&rating=g&lang=en`
                )
                .then(function (response) {
                    setGifList(response.data.data);
                    setGifsLoading(false);
                    // gifList.map(gif => console.log(gif));
                })
                .catch(function (error) {
                    console.log(error);
                })
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
