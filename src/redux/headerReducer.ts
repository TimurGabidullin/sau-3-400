


export type HeaderType={
    title: string,
    idHeader:string
}

const initialState= [
    {
        title: "Проверка масштабов по сигналам текущего тангажа, крена, курса.",
        idHeader:"head1"
    } as HeaderType,
    {
        title: "Проверка передаточных коэффициентов угловых скоростей тангажа, курса, крена.",
        idHeader:'head2'
    } as HeaderType,

    {
        title: "Проверка срабатывания пороговых устройств по предельным значениям крена и тангажа.",
        idHeader:'head3'
    } as HeaderType,
    {
        title: "Проверка работы САУ в полуавтоматическом режиме захода на посадку.",
        idHeader:'head4'
    } as HeaderType,
    {
        title: "Проверка работы САУ в полуавтоматическом режиме захода на посадку.",
        idHeader:'head5'
    } as HeaderType,
    {
        title: "Проверка масштабов по сигналам датчика положения элеронов.",
        idHeader:'head6'
    } as HeaderType,

    {
        title: "Проверка управления от ручки КРЕН.",
        idHeader:'head7'
    } as HeaderType,
    {
        title: "Проверка передаточного коэффициента по сигналу ЗК от ручки КУРС.",
        idHeader:'head8'
    } as HeaderType,


]

export const headerReducer = (state: HeaderType[] = initialState): HeaderType[] => {
            return state
    }

export default headerReducer;