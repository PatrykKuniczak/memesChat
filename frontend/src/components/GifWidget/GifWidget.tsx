import useGifWidget from "components/GifWidget/useGifWidget";
import {
    GifWidgetWrapper,
    GifWidgetSearch,
    GifList,
    GifWidgetFooter
} from "./GifWidget.styled";
import GiphyAttributionLogoImage from "assets/GiphyAttributionLogo.png";

type TGifWidget = { toggleGifWidgetVisibility: () => void };

const GifWidget = ({ toggleGifWidgetVisibility }: TGifWidget) => {
    const { gifsIsLoading, fetchGifs, findGif, gifSearchInput, ref } =
        useGifWidget(toggleGifWidgetVisibility);

    return (
        <GifWidgetWrapper ref={ref}>
            <GifWidgetSearch
                type="search"
                value={gifSearchInput}
                onChange={findGif}
                autoFocus={true}
                placeholder="Znajdź gifa"
            />
            <GifList>{!gifsIsLoading && fetchGifs()}</GifList>
            <GifWidgetFooter>
                <span>Powered by</span>
                <img
                    style={{ width: "5rem" }}
                    src={GiphyAttributionLogoImage}
                    alt={"Powered by Giphy"}
                />
            </GifWidgetFooter>
        </GifWidgetWrapper>
    );
};

export default GifWidget;
