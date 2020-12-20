import { useState, useRef, useEffect } from 'preact/hooks';

const EditableLabel = ({ label, className, onChange = () => {} }) => {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(label);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const onFocusHandler = () => {
    document.execCommand('selectall', null, false);
  };

  const onChangeHandler = (event) => {
    if (event.target) {
      setText(event.target.value);
    }
  };

  const onBlurHandler = () => {
    setEditing(false);
    onChange(text);
  };

  const onClickHandler = () => {
    setEditing(true);
  };

  const onKeyPressHandler = (event) => {
    if(event.key == 'Enter') {
      onBlurHandler();
    }
  };

  return (
    <div className={className}>
      {isEditing
        ? <input
            ref={inputRef}
            type='text'
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            onKeyPress={onKeyPressHandler}
            onFocus={onFocusHandler}
            value={text}
          />
        : <span onClick={onClickHandler}>{text}</span>
      }
    </div>
  );
};

export default EditableLabel;
