import { ErrorIndicator, LoadingIndicator } from "assets/styles/theme";

interface IDependlyComponentDisplay {
    isLoading: boolean;
    error: unknown;
    data: any;
}

const dependlyComponentDisplay = ({
    isLoading,
    error,
    data
}: IDependlyComponentDisplay) => {
    if (isLoading) {
        return <LoadingIndicator>Ładowanie...</LoadingIndicator>;
    }

    if (error) {
        return (
            <ErrorIndicator>
                Wystąpił błąd podczas ładowania danych.
            </ErrorIndicator>
        );
    }

    return <>{data}</>;
};

export default dependlyComponentDisplay;
