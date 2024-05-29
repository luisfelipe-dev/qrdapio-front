"use client";
import LoginForm from "@/components/LoginForm";
import { ContainerGrid } from "@/components/container";
import React from "react";

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <ContainerGrid className="h-lvh flex flex-wrap items-center justify-center">
      <LoginForm />
    </ContainerGrid>
  );
};

export default Login;
