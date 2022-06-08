import { Keypair } from './keypair';

describe('keypair', () => {
  it('should work', () => {
    expect(Keypair.generate()).toContain('generated-');
  });
});
