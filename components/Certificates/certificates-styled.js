import styled from 'styled-components';

export const CertificatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

export const CertificateItem = styled.div`
  img {
    border-radius: 8px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;
