import { FormField } from "site/sections/Form.tsx";
import TermModal from "site/islands/TermModal.tsx";
import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";

const InputField = ({ field }: { field: FormField }) => {
  const { id: inputId, name, required, selectValues, children } = field;

  if (children && children.length > 0) {
    return (
      <div class="flex flex-col md:flex-row gap-8">
        {children.map((child) => (
          <InputField field={child} />
        ))}
      </div>
    );
  }

  return (
    <label class="w-full" for={inputId}>
      {selectValues && selectValues?.length > 0 ? (
        <select
          id={inputId}
          name={inputId}
          required={required}
          class="cursor-pointer w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1"
        >
          <option class="bg-[#f0ede2]" value="" disabled selected>{`${name}${
            required ? "*" : ""
          }`}</option>
          {selectValues.map((option) => (
            <option class="bg-[#f0ede2]" value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={inputId}
          name={inputId}
          class="w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1"
          placeholder={`${name}${required ? "*" : ""}`}
          required={required}
        />
      )}
    </label>
  );
};

export default function Form({
  fields,
  term,
}: {
  fields: FormField[];
  term: string;
}) {
  const modalOpen = useSignal(false);
  const acceptedTerm = useSignal(false);
  const loading = useSignal(false);

  // deno-lint-ignore no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const sheets = google.sheets({ version: 'v4', auth: 'AIzaSyD3Yn0079oAQRI4bMM5_lLECYXCvN3IpQw' })
    // const sheetsID = "1noft7lT-IW_SCYzwDYC1bE4BGl2VMFsNiLQhxWT9_Hs"
    // const range = 'SHEET1!A-E'

    // try {
    //   const response = await sheets.spreadsheets.values.append({
    //     sheetsID,
    //     range,
    //     valueInputOption: 'RAW',
    //     resource: {
    //       values: [[name, email]],
    //     },
    //   });
    //   res.json(response.data);
    // } catch (error) {
    //   res.status(500).send('Error adding data to sheet');
    // }

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <>
      <form
        class="flex flex-col gap-8 w-full py-8"
        onSubmit={(e) => handleSubmit(e)}
      >
        {fields.map((field) => (
          <InputField field={field} />
        ))}
        <div class="flex flex-col md:flex-row gap-8 md:gap-4 w-full text-[#113032] items-center">
          <label class="flex gap-2" for="acceptTerm">
            <input
              id="acceptTerm"
              name="acceptTerm"
              class="border-[#27AE6B]"
              type="checkbox"
              checked={acceptedTerm.value}
              onChange={() => (acceptedTerm.value = !acceptedTerm.value)}
              required
            />
            <div>
              <span>Concordo com o </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  modalOpen.value = true;
                }}
                class="underline cursor-pointer text-[#27AE6B]"
              >
                Termo de Consentimento de Uso de Voz e Imagem
              </span>
            </div>
          </label>
          <button
            class="btn w-full md:w-fit px-8 py-2 bg-[#27AE6B] hover:bg-[#329f69] text-white"
            type="submit"
          >
            {loading.value ? (
              <Icon id="loading" width="20" height="20" class="animate-spin" />
            ) : (
              <>Enviar</>
            )}
          </button>
        </div>
      </form>
      {modalOpen.value && (
        <TermModal
          term={term}
          onClose={() => (modalOpen.value = false)}
          onAccept={() => {
            modalOpen.value = false;
            acceptedTerm.value = true;
          }}
        />
      )}
    </>
  );
}
