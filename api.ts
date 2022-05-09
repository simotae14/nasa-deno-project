import { Router } from "https://deno.land/x/oak@v10.2.1/mod.ts";

// create a new Router object
const router = new Router();

// define a GET route
router.get("/", (ctx) => {
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

// export the router
export default router;
