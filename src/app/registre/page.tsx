"use client";
import RegisterForm from "@/components/RegisterForm";
import { ContainerGrid } from "@/components/container";
import React from "react";

// import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <ContainerGrid className="h-lvh flex flex-wrap items-center justify-center">
      <RegisterForm />
    </ContainerGrid>
  );
};

export default Register;
