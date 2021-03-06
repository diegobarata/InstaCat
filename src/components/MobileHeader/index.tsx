import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://lh3.googleusercontent.com/7gvbyID5EMSJqB-N2-ZnwEiFqrD09s5-4EsRRWPxDiVfqwvgd7rW7JFXAbEguo-7AmKxjh-ZR-8Q9nEdjAr2qLh8vYU8gWRpzOVELWvxy1JbMjJHiMJtZbE20AwFRva8LTa893aOIMtdAmfbH-6y7-PdVDMfY3qom19ok6O8hMiKfWUKbzpzzZ4PrqlTl5SETo4dPN3Z_1KN5ZCKetouiYWGy77JfxKFi1aD_qRxqypiPAP8eEBJE5M5d-8WYHrhxSMFrLF4wkpdAfxxkuzm3-HdG9pv0ICr0gMUmULn5d6hBffMtkmBKL1BLuXaKCVmZZrRt1Rr_tEkoUmxQy_o-s5hNdsH8pV2bofvfZxDTWXvx3G0lBnpW8ubjy6VGVGYHRGKls2-Wll_VNKeyVJPPnZ_2fzeyanXybi6WFEVqOUB4U6eUJFrNfBjvmsTrnqeS0Bz6kACDq_Hyw9FjF3r6S6c5UdO9_eoBwzOKYG4hBRZxUdU82U1G6sqqZOcyemLPosHStQppyR_d79r1EhKEebtmxLq-l5PhQy1ji1Dne84SZDOhSbBGLQdNlrLaLUdGKhkhQCvjsSAzzPNls7QVtfP3QuTI2BeKUfC0_hHG_iObPPNrhA8hCkT4iUbaRswe2P882V4fT5nU3zYHIFlKgmHyuuZ0cv2BYFWrdLA_msJ5dM35AjgrTLtG-3hWS3MY1-lDteP28rnGD4NhnzJxWkf=w890-h668-no?authuser=0" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
