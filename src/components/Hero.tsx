import styled from "styled-components";
import { DOCS_LINK } from "../lib/links";
import Header from "./Header";
import Terminal from "./Terminal";

const terminalContent: string[] = [
  "user@ubuntu:~$ git clone https://github.com/akula-bft/akula",
  "Cloning into 'akula'...",
  "remote: Enumerating objects: 8019, done.",
  "remote: Counting objects: 100% (259/259), done.",
  "remote: Compressing objects: 100% (126/126), done.",
  "remote: Total 8019 (delta 150), reused 211 (delta 125), pack-reused 7760",
  "Receiving objects: 100% (8019/8019), 8.86 MiB | 6.76 MiB/s, done.",
  "Resolving deltas: 100% (5590/5590), done.",
  "user@ubuntu:~$ cd akula",
  "user@ubuntu:~/akula$ cargo build --all --profile=production",
  "    Updating git repository `https://github.com/vorot93/arrayvec`",
  "    Updating git repository `https://github.com/vorot93/ethnum-rs`",
  "    Updating git repository `https://github.com/vorot93/bytes-literal`",
  "    Updating git repository `https://github.com/saulius/croaring-rs`",
  "    Updating git submodule `https://github.com/lemire/CRoaringUnityBuild`",
  "    Updating git repository `https://github.com/ledgerwatch/interfaces`",
  "    Updating git repository `https://github.com/vorot93/ethereum-jsonrpc`",
  "    Updating git repository `https://github.com/vorot93/rust-i256`",
  "    Updating git repository `https://github.com/stevefan1999-personal/rust-igd`",
  "    Updating git repository `https://github.com/vorot93/task-group`",
  "    Updating git repository `https://github.com/michaellass/e2p-fileflags`",
  "    Updating git repository `https://github.com/michaellass/e2p-sys.git`",
  "  Downloaded wildmatch v1.1.0",
  "  Downloaded indexmap v1.9.1",
];

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  flex-direction: column;
  align-items: center;

  padding: 0 14rem;
  padding-top: 5rem;
  @media (max-width: 1367px) {
    padding: 0 10rem;
    padding-top: 5rem;
  }
`;

const Gradients = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(250px) saturate(1.15);
`;

const BottomLeftGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  left: -5%;
  width: 35%;
  height: 60%;
  background: var(--third);
`;

const RightGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  right: -8%;
  bottom: 50%;
  transform: translateY(50%);
  height: 40%;
  width: 30%;
  background: var(--first);
`;

const BottomRightGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  right: 13%;
  width: 35%;
  height: 30%;
  background: var(--second);
`;

const HeroText = styled.h1`
  position: relative;
  font-size: 9.6rem;
  font-weight: 600;
  text-align: center;
  max-width: 90rem;
  margin-top: 12rem;
`;

const HeroSubText = styled.h3`
  position: relative;
  font-size: 2.3rem;
  color: var(--sub);
  text-align: center;
  font-weight: 400;
  margin-top: 2rem;
  max-width: 60rem;
  line-height: 1.4;
`;

const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  background: var(--gradient);
  border-radius: 1.4rem;
  padding: 1.9rem 3.1rem;
  font-size: 2.2rem;
  margin-top: 6rem;
  font-weight: 500;
  cursor: pointer;
`;

const GradientText = styled.span`
  position: relative;
  font-size: 9.6rem;
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TerminalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13rem;

  width: 66vw;
  max-width: 120rem;
  height: 34.6vw;
  max-height: 62rem;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Gradients>
        <BottomLeftGradient />
        <RightGradient />
        <BottomRightGradient />
      </Gradients>
      <Header />
      <HeroText>
        The Worlds <GradientText>Fastest </GradientText> Ethereum Client
      </HeroText>
      <HeroSubText>
        Akula is written in Rust, it supports Faster sync speeds, crash
        resilience and a historical state API
      </HeroSubText>
      <Button href={DOCS_LINK} target="_blank">
        View the docs →
      </Button>
      <TerminalContainer>
        <Terminal code={terminalContent} />
      </TerminalContainer>
    </StyledHero>
  );
};

export default Hero;
