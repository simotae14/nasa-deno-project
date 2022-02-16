import { Application } from "https://deno.land/x/oak@v10.2.1/mod.ts";

// create an instance of the Application class
const app = new Application();

// define the http port
const PORT = 8000;

// use method of oak
app.use((ctx) => {
    // send a response
    ctx.response.body = `
    {___     {__      {_         {__ __        {_
    {_ {__   {__     {_ __     {__    {__     {_ __
    {__ {__  {__    {_  {__     {__          {_  {__
    {__  {__ {__   {__   {__      {__       {__   {__
    {__   {_ {__  {______ {__        {__   {______ {__
    {__    {_ __ {__       {__ {__    {__ {__       {__
    {__      {__{__         {__  {__ __  {__         {__
                    Mission Control API`;
});

if (import.meta.main) {
    // listen method of oak
    await app.listen({
        port: PORT
    });
}
