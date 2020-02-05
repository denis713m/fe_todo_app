
/**
 *
 * @param {Array<EntityType>} entities
 * @return {function(*): function(...[*]=)}
 */
export default function (entities) {

  return function (action) {

    return function (req, res, next) {
      try {

        next();
      } catch (e) {
        next( e );
      }
    };
  };
}

/*

 action: CRUD
 actor: [ADMIN, USER, MODERATOR] isOwner
 object: ADMIN, USER, MODERATOR, TASK

 LEAFs:
 entity
 property
 propertyValue



 */

