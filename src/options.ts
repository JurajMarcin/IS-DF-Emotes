import { Emotes, getDefaultEmoteUrl, getEmoteUrl, setEmoteUrl } from './emotes';

const showAlert = (type: 'success' | 'danger', message: string) => {
    const alertElement = document.getElementById('alert') as HTMLElement;
    alertElement.innerHTML = message;
    alertElement.classList.remove('alert-success', 'alert-danger');
    alertElement.classList.add(`alert-${type}`);
    alertElement.style.setProperty('display', 'block');
};

const setImageSrc = (emote: Emotes, url: string) => {
    document.getElementById(`img-${emote}`)?.setAttribute('src', url)
};

const getInputValue = (emote: Emotes) => {
    return (document.getElementById(emote) as HTMLInputElement).value;
};

const setInputValue = (emote: Emotes, url: string) => {
    (document.getElementById(emote) as HTMLInputElement).value = url;
};

const saveOptions = async () => {
    await Promise.all(Object.values(Emotes).map(async (emote) => {
        await setEmoteUrl(emote, getInputValue(emote));
    }));
    await loadImages();
};

const loadOptions = async () => {
    await Promise.all(Object.values(Emotes).map(async (emote) => {
        setInputValue(emote, (await getEmoteUrl(emote)) || '');
    }));
    await loadImages();
};

const loadImages = async () => {
    await Promise.all(Object.values(Emotes).map(async (emote) => {
        const emoteUrl = (await getEmoteUrl(emote)) || (await getDefaultEmoteUrl(emote));
        setImageSrc(emote, emoteUrl);
    }));
};


window.addEventListener('load', () => {
    loadOptions()
        .then()
        .catch((error) => showAlert('danger', error));
    
    document.getElementById('save')?.addEventListener('click', () => {
        saveOptions()
            .then(() => showAlert('success', 'Saved'))
            .catch((error) => showAlert('danger', error));
    });
});
