const express = require('express') 
const fetch = require("node-fetch");

const router = express.Router();

const baseURL= "https://api.github.com"

router.get('/users', async (req, res) => {
    const{since} = req.query;

    await fetch(
        `${baseURL}/users?since=${since}&per_page=30`,
        {
          method: 'get',
         /* headers: {
            Authorization: `token ${token}`
        }*/})
        .then((res) => {return res.json()})
        .then((data) => res.send(data))
        .catch(function(err){
            console.error('Não foi possível achar a informação', err)
          });

        })

router.get('/users/:username/details', async (req, res) => {
    const{username} = req.params;

    await fetch(
        `${baseURL}/users/${username}`,
        {
            method: 'get',
            /*headers: {
            Authorization: `token ${token}`
        }*/})
        .then((res) => {return res.json()})
        .then((data) => res.send(data))
        .catch(function(err){
            console.error('Não foi possível achar a informação', err)
            });

        })

        router.get('/users/:username/repos', async (req, res) => {
            const{username} = req.params;
        
             await fetch(
                `${baseURL}/users/${username}/repos`,
                {
                    method: 'get',
                   /* headers: {
                    Authorization: `token ${token}`
                }*/})
                .then((res) => {return res.json()})
                .then((data) => res.send(data))
                .catch(function(err){
                    console.error('Não foi possível achar a informação', err)
                    });
        
                })

module.exports = router;