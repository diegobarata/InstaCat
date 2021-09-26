import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://lh3.googleusercontent.com/lU0NpNMfWLUMkpvn6nBd_TgSrM03l3YbpsmS5gpqaF4qCdwo0tCK2N7dYGILz9W4CuzPHdhXLb9CDLkbZRy2WYUUuLhATPWlKY5E-B9NN_RKuhuoassCaFO3g6sGzp3pbvRshZRdXIYPVxHdKe8FtUykXHF-RU-GPtjM0f6ZGv_MOr7J5iWiknWvoUN2svQ2ZScvHGgKfwtIuTkNdAZOxczsfaEpPtILye-96F4u-m3HXJS1uSQ-Bfn-AGa--G11aQlgO_3qXZvKMpRhVeqMdbpD1A2ChJ4gV-UTxtrlut0mYakwrKV4AYy5bHOnniOqVEqYdwhw1nmonRVINjPL6uvWbOk25XGvLZ12tH5fo7yf64En9Ilpp1iawVmyjMA48YhcbAqoX5dErocEhcD6YmJLPwAsvbds7vUm3fXUfJ8RU9WLiOuQ9044e66FLM9WOlLFrlJfftdf_ES7cJ7vlqxUuVgqLM2fVE3T407iRq4SnDjS7-aOC7JCB9s4T-RpOXnAdS4AhNk23FLMYtRhSH0JpZDYGfINqN5dyI05wnmHfTCMSEKWnBDA_tjNMwQcIHNKbLB8np5nTGOnnSx4nYccUh0Hn4ZIKal5glp5HhJGtkCsxPkVvKhcPYGkbtS_B-XitK637zqR4ANSu8uhJLY8WQEZ5lNSQm9G_o-WtL-LjRdwkJCAaI5tok2T6u4ykIKewaMQ4WhKZv0PCcHoW4hW=w502-h668-no?authuser=0" alt="Mai Cabeça" />
          <Column>
            <h3>Mai Cabeça</h3>
            <h4>Rei da casa</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://lh3.googleusercontent.com/4oFtSijr79tErcbr11EMcPW4ma5G_l0M-21xDkV2ZzVG283xHNt8GdWJdeEs6cQrpIVtGnCA7o6yexfLeJ4mclOmNJidtc7wUuu0Qm6JfY8QZHszIjTPGqzlJEttBzhXeWj7KXqJEribAasKucmHtGtZbzr-Of30vjf-38UR7cpaEazXfdKALdiCKastj33diVbkDUnfIFPr7_tbDpyVnfaqFipkYJQwT3eLkrTSU1JKX22qfhSz3D6glJcpNz65isXb_netqB9TzMUWP65cCQk-cw28sZW2KzlvrzEpZuDekiXwVmJJi7va7DQm0BpyB1irX-RhX14ZmI0iD0hHGFbc2vzw0DTk-z753XSCHPeidowsv4oC1kX0JGKqDpajzmocPm5DT_KLHrJ_7hNP2TCyb1B-z1tmB6dXz5XCeUoJGCl9dYrkJZTducw4ul0p1erWAzbg0j9s31mUDavdFWlZxLoIwCXUUfsOWMb_aNQoMXSgLwxfzy3F59818ZLklltuG6pEdz_1a9JBUluMp62veW5dKomncDU8UlQLfeurtsaJmO0-dadoiwyY53-c8sJj0UqOt9NUcffycYW_o_-sKfqBxx9SKKuAfKYqwfjDz8cw5-nBdcD-DIiBlEVpnSObf4jvWOIxmtwuZgxD1KxW3Yp3zHm-zXgkLU3UFtak1lpsvMxzPJdWXXFd85BtB4wU7bHI0b3062VZMeVMstwY=w502-h668-no?authuser=0"
          alt="Mai post"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
