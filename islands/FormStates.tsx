import { useState } from "preact/hooks";
import SentState from "site/components/Form/SentState.tsx";
import { FormProps } from "site/sections/Form.tsx";
import Form from "site/islands/Form.tsx";

export default function FormStates(props: FormProps) {
  const [sent, setSent] = useState(false);

  return (
    <div>
      {sent ? (
        <SentState
          sentText={props.sentText}
          sentTitle={props.sentTitle}
          locationInfo={props.locationInfo}
        />
      ) : (
        <>
          <p dangerouslySetInnerHTML={{ __html: props.initialText }}></p>
          <Form fields={props.formFields} />
        </>
      )}
    </div>
  );
}
