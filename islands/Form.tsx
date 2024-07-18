import { FormField } from "site/sections/Form.tsx";

export default function Form({ fields }: { fields: FormField[] }) {
  console.log(fields);

  return (
    <form class="flex flex-col gap-8 w-full py-8">
      {fields.map((field) => (
        <div class="flex gap-4 w-full text-[#113032]">
          {field.children ? (
            field.children.map((child: FormField) => {
              const { name, required, selectValues } = child;
              return (
                <label class="w-full">
                  {selectValues && selectValues?.length > 0 ? (
                    <select>
                      <option
                        class="bg-[#f0ede2]"
                        value=""
                        disabled
                        selected
                      >{`${name}${required ? "*" : ""}`}</option>
                      {selectValues.map((option) => (
                        <option class="bg-[#f0ede2]" value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      class="w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1"
                      placeholder={`${name}${required ? "*" : ""}`}
                    />
                  )}
                </label>
              );
            })
          ) : (
            <label class="w-full">
              {field.selectValues && field.selectValues?.length > 0 ? (
                <select class="cursor-pointer w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1">
                  <option class="bg-[#f0ede2]" value="" disabled selected>{`${
                    field.name
                  }${field.required ? "*" : ""}`}</option>
                  {field.selectValues.map((option) => (
                    <option class="bg-[#f0ede2]" value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  class="w-full bg-[#f0ede2] border-b border-[#27AE6B] placeholder-[#113032] outline-none pl-2 pb-1"
                  placeholder={`${field.name}${field.required ? "*" : ""}`}
                />
              )}
            </label>
          )}
        </div>
      ))}
      <div class="flex gap-4 w-full text-[#113032] items-center">
        <label class="flex gap-2">
          <input class="border-[#27AE6B]" type="checkbox" />
          <div>
            <span>Concordo com o </span>
            <span class="underline cursor-pointer text-[#27AE6B]">
              Termo de Consentimento de Uso de Voz e Imagem
            </span>
          </div>
        </label>
        <button class="btn w-fit px-8 py-3 bg-[#27AE6B] hover:bg-[#329f69] text-white">
          Enviar
        </button>
      </div>
    </form>
  );
}
