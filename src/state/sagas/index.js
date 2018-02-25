import { take, select, all, put } from 'redux-saga/effects';
import { types as noteTypes } from 'state/modules/notes';
import { selectors as typeSelectors } from 'state/modules/types';
import { operations as cardOperations } from 'state/modules/cards';

function* watchAddNote() {
  while (true) {
    const { payload: newNote } = yield take(noteTypes.ADD);
    const noteType = yield select(typeSelectors.getTypeById, newNote.type);
    yield all(
      noteType.templates.map(template =>
        put(
          cardOperations.addCard({
            note: newNote.id,
            template
          })
        )
      )
    );
  }
}

export default watchAddNote;
