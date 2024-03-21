export default function ViewIsPoppedOut(): boolean | undefined {
    const url = new URL(window.location.href);
    return url.searchParams.get("popout") == "true";
}