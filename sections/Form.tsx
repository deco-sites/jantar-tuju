import Icon from "site/components/ui/Icon.tsx";
import FormStates from "site/islands/FormStates.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Location {
  title: string;
  text: string;
}

/**
 * @title select
 */
export interface SelectInput {
  values: string[];
}

/**
 * @title {{{id}}} - {{{name}}}
 */
export interface FormField {
  /**
   * @title Identificador
   * @description Nome da coluna na planilha onde será salvo
   */
  id: string;

  /**
   * @title Nome
   */
  name: string;
  /**
   * @title Obrigatório
   */
  required?: boolean;
  /**
   * @title Valores fixos
   */
  selectValues?: string[];
  children?: FormField[];
}

export interface FormProps {
  /**
   * @title logo do restaurante
   */
  logo: ImageWidget;

  /**
   * @title Data
   * @default 29/07/24
   */
  date: string;

  /**
   * @title Text inicial do formulário
   * @format rich-text
   */
  initialText: string;

  /**
   * @title Termo de uso
   * @format rich-text
   */
  termUse: string;

  /**
   * @title Tìtulo formulario enviado
   * @format rich-text
   */
  sentTitle: string;

  /**
   * @title Texto formulario enviado
   * @format rich-text
   */
  sentText: string;

  /**
   * @title Informações do local
   */
  locationInfo: Location[];

  background: ImageWidget;

  formFields: FormField[];
}

export default function Section(props: FormProps) {
  return (
    <div class="flex flex-col justify-center lg:justify-between md:flex-row items-center min-h-screen">
      <div
        class="flex md:absolute -z-50 items-center overflow-hidden bg-no-repeat bg-cover bg-center h-32 md:h-screen w-screen"
        style={`background-image: url('${props.background}');`}
      ></div>
      <div
        class="flex flex-col bg-[#F0ECE2] md:bg-transparent justify-center bg-no-repeat bg-auto md:bg-cover px-4 md:px-16 max-w-[750px] min-h-[800px] ml-0 lg:ml-20 grow"
        style="background-image: url('/background.svg');"
      >
        <div class="flex relative self-start items-center w-full h-full">
          <Icon
            id="deco"
            width="173"
            height="48"
            class="absolute top-[-26px]"
          />
          <Icon
            id="flower"
            width="50"
            height="50"
            class="hidden md:block absolute top-[-26px] right-[-90px]"
          />
        </div>

        <FormStates {...props} />
      </div>
      <div class="hidden lg:flex flex-col items-center justify-between h-screen py-8 px-4">
        <Image src={props.logo} width={100} />
        <span class="text-white text-2xl">{props.date}</span>
      </div>
    </div>
  );
}
