import { Emotes, getDefaultEmoteUrl, getEmoteUrl } from './emotes';

const main = async () => {
    const root = document.querySelector(':root') as HTMLElement;
    if (!root) {
        throw new Error('No root element found');
    }
    await Promise.all(Object.values(Emotes).map(async (emote) => {
        const emoteUrl = (await getEmoteUrl(emote)) || (await getDefaultEmoteUrl(emote));
        root.style.setProperty(`--image-${emote}`, `url(${emoteUrl})`);
    }));
};

main()
    .then()
    .catch(console.error);
