import type { Test } from './lib';

type Foo = {
  a: string
}

type Res = Test<Foo>
