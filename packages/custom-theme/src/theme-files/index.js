import React, { useState, useEffect  } from 'react';
import {connect, Global, css, styled, Head} from "frontity";
import Menu from "./menu";
import List from "./List";
import Page from "./page";
import Footer from "./footer";
import Loader from './Loader'
import Frontend from '../../static/frontend.min.css';
import Animation from '../../static/animations.min.css';
import ElementorIcon from '../../static/elementor-icons.min.css';
import PostType from "./PostType";

const Root = ({ actions, state }) => {

    const [isImgLoading, setIsImgLoading] = useState(true);

   useEffect(() => {
       actions.source.fetch(state.router.link);
    }, []);

    const data = state.source.get(state.router.link);
    return (
        <>
            {!data.isReady || data.isFetching ? (
                <Loader />
            ) : (
               <>
                   <Head>
                       <title>Frontity Workshop at JS Nation</title>
                       <meta name="description" content="An introduction to creating a theme with Frontity" />
                       <style>{ElementorIcon}</style>
                       <style>{Frontend}</style>
                       <style>{Animation}</style>
                   </Head>
                   <Global
                       styles={css(`
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-size: 10px;
        }
        html {
            font-family: sans-serif;
        }
      `)}
                   />
                   <Menu/>
                   <Container>
                       {data.isArchive && <List />}
                       {data.isPage && <Page />}
                       {data.isPostType && <PostType />}
                   </Container>
                   <Footer/>
               </>
            )}

        </>
    );
};

const Container = styled.div`
    padding: 2.5rem 5rem;
`;



export default connect(Root);
