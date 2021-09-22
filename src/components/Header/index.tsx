import { useState } from "react";
import logoIng from "../../assets/logo.svg";
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoIng} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
