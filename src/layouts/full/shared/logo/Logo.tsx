import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "240px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/xactscore-logo.png" alt="logo" height={40} width={200} priority style={{margin: 10}} />
    </LinkStyled>
  );
};

export default Logo;
