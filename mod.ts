import { Application, send } from "https://deno.land/x/oak@v10.2.1/mod.ts";

// create an instance of the Application class
const app = new Application();

// define the http port
const PORT = 8000;

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url}: ${time}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

// serving static files
app.use(async (ctx, next) => {
    const filePath = ctx.request.url.pathname;
    const fileWhitelist = [
        '/index.html',
        '/javascripts/script.js',
        '/stylesheets/style.css',
        '/images/favicon.png',
    ];
    if (fileWhitelist.includes(filePath)) {
        await send(ctx, filePath, {
            root: `${Deno.cwd()}/public`,
        });
    }
});

// use method of oak
app.use(async (ctx, next) => {
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
    await next();
});

if (import.meta.main) {
    // listen method of oak
    await app.listen({
        port: PORT
    });
}
