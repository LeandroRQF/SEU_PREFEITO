import React from 'react';

import { Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from '@material-ui/core/Card'

import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
    TwitterLoginButton,
    AmazonLoginButton,
    InstagramLoginButton,
    LinkedInLoginButton,
    MicrosoftLoginButton
} from 'react-social-login-buttons';

export default function Login() {
    return (
        <div className='root'>

            <Table>

                <TableRow>
                    <TableCell>
                        <FacebookLoginButton variant='contained' onClick={() => alert('Facebook')} style={{ width: '150px', height: '35px' }} >Facebook</FacebookLoginButton>
                    </TableCell>

                    <TableCell>
                        <GoogleLoginButton variant='contained' onClick={() => alert('Google')} style={{ width: '150px', height: '35px' }} >Google</GoogleLoginButton>
                    </TableCell>

                    <TableCell>
                        <GithubLoginButton onClick={() => alert('GitHub')} style={{ width: '150px', height: '35px' }} >GitHub</GithubLoginButton>
                    </TableCell>

                    <TableCell>
                        <TwitterLoginButton onClick={() => alert('Twitter')} style={{ width: '150px', height: '35px' }} >Twitter</TwitterLoginButton>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <AmazonLoginButton onClick={() => alert('Amazon')} style={{ width: '150px', height: '35px' }} >Amazon</AmazonLoginButton>
                    </TableCell>

                    <TableCell>
                        <InstagramLoginButton onClick={() => alert('Instagram')} style={{ width: '150px', height: '35px' }} >Instagram</InstagramLoginButton>
                    </TableCell>

                    <TableCell>
                        <LinkedInLoginButton onClick={() => alert('LinkedIn')} style={{ width: '150px', height: '35px' }} >LinkedIn</LinkedInLoginButton>
                    </TableCell>

                    <TableCell>
                        <Button onClick={() => alert('LinkedIn')} style={{ width: '150px', height: '35px' }} >Cadastrar </Button>
                    </TableCell>
                </TableRow>

            </Table>


        </div>
    );
};