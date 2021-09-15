import './formControls.scss';

export const Input = (props) => {
  return (
    <>
      <input className="styledInput" {...props} />
    </>
  );
};

export const Button = (props) => {
  return (
    <>
      <button className="styledBtn" {...props} />
    </>
  );
};

export const Textarea = (props) => {
  return (
    <>
      <textarea className="styledTextarea" {...props} />
    </>
  );
};
