import { Dispatch, SetStateAction } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type TextQuillProps = {
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
};
export const TextQuill: React.FC<TextQuillProps> = ({ content, setContent }) => {



    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['image', 'code-block', 'blockquote', 'link', 'clean'],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image']
        ],
    };

    return (
        <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
        />
    );
};