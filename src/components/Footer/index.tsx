import Link from "next/link";
import { Heading } from "../Heading";
import { Logo } from "../Logo";
import * as S from "./styles";

export function Footer() {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading color="black" size="sm" lineBottom lineColor="secondary">
            Contact
          </Heading>

          <a href="mailto:sophie.agp@gmail.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="sm">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="sm">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">Home</Link>
            <Link href="/games">Store</Link>
            <Link href="/search">Buscar</Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" lineBottom size="sm">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
}
