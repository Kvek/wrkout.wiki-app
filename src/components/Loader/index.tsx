import { useEffect, useState } from 'react';

import { Squat, Stand } from '@components/Icons';

import { useAppSelector } from 'shared/hooks';
import { quotes, QuoteType } from 'shared/quotes';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.Background.colors.default};
  bottom: 0;
  color: ${({ theme }) => theme.Typography.colors.primary};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  width: 600px;
`;

const LoadingContainer = styled.div`
  align-items: flex-end;
  display: flex;
  max-height: 70px;
  min-height: 70px;
  width: 70px;
`;

const Copy = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  white-space: normal;

  code {
    margin-top: 10px;
  }
`;

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState<QuoteType | undefined>();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  if (!randomQuote) return null;

  const { person, quote } = randomQuote;

  return (
    <Copy>
      <p>&#8220;{`${quote}`}&#8221;</p>
      <code>-{person}</code>
    </Copy>
  );
};

export const Loader = () => {
  const loading = useAppSelector(({ app: { loading } }) => loading);

  const [squat, setSquat] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    if (loading && !interval) {
      interval = setInterval(() => {
        setSquat((prevState) => !prevState);
      }, 750);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <Container>
      <InnerContainer>
        <LoadingContainer>{squat ? <Squat /> : <Stand />}</LoadingContainer>
        <Quotes />
      </InnerContainer>
    </Container>
  );
};
