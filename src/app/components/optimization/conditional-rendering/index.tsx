"use client";

//import { SlowConponentWithHook } с хуком, который ходит с запросов
// куда-то долго 

// этот хук может быть экспортирован из другого компонента
const useIsAuthorized = () => {
    return false;
}

export default function ConditionalRendering() {
    const isAuthorized = useIsAuthorized();

    return <div>
        {/*Не авторизованным пользователям не нужно ждать медленный компонент*/}
        {/*isAuthorized && <SlowConponentWithHook /> */}
    </div>
}