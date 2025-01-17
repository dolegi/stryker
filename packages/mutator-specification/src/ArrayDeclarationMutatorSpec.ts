import { expect } from 'chai';

import ExpectMutation from './ExpectMutation';

export default function ArrayDeclarationMutatorSpec(name: string, expectMutation: ExpectMutation) {
  describe('ArrayDeclarationMutator', () => {
    it('should have name "ArrayDeclaration"', () => {
      expect(name).eq('ArrayDeclaration');
    });

    it('should mutate filled array literals as empty arrays', () => {
      expectMutation('[a, 1 + 1]', '[]');
      expectMutation("['val']", '[]');
    });

    it('should mutate empty array literals as a filled array', () => {
      expectMutation('[]', '["Stryker was here"]');
    });

    it('should mutate filled array literals as empty arrays', () => {
      expectMutation('new Array(a, 1 + 1)', 'new Array()');
      expectMutation("new Array('val')", 'new Array()');
    });

    it('should not mutate other new expressions', () => {
      expectMutation('new Object(21, 2)');
      expectMutation('new Arrays(21, 2)');
    });

    it('should mutate empty array literals as a filled array', () => {
      expectMutation('new Array()', 'new Array([])');
    });
  });
}
