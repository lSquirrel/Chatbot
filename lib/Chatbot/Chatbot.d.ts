export interface Dialogue {
    question: string;
    reply: string;
    isDefault?: boolean;
}
export interface ChatbotProps {
    title?: string;
    greet?: string;
    robotAvatar?: string;
    userAvatar?: string;
    dialogues: Dialogue[];
    failTips?: string;
    historyMessages?: Message[];
    onReply?: Function;
    getMessages?: Function;
    theme?: string;
}
export interface Message {
    createdAt: number;
    role: string;
    content?: string;
    list?: string[];
    type?: string;
}
declare const Chatbot: (props: ChatbotProps) => import("react/jsx-runtime").JSX.Element;
export default Chatbot;
