import { useState } from "preact/hooks";
import Icon from "site/components/ui/Icon.tsx";
import SentState from "site/components/Form/SentState.tsx";
import FormStates from "site/islands/FormStates.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

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
 * @title {{{name}}}
 */
export interface FormField {
  /**
   * @title Nome
   */
  name?: string;
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
    <div
      class="flex items-center bg-no-repeat bg-cover bg-center h-screen w-screen md:px-12"
      style={`background-image: url('${props.background}');`}
    >
      <div
        class="relative bg-no-repeat bg-cover py-24 px-16 max-w-[750px]"
        style="background-image: url('/background.svg');"
      >
        <Icon id="deco" width="173" height="48" class="absolute top-[-24px]" />
        <Icon
          id="flower"
          width="50"
          height="50"
          class="absolute top-[-24px] right-[-24px]"
        />

        <FormStates {...props} />
      </div>
    </div>
  );
}
