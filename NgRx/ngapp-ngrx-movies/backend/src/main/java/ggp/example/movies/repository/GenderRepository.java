package ggp.example.movies.repository;

import ggp.example.movies.model.Gender;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "genders ", path = "genders ")
public interface GenderRepository extends PagingAndSortingRepository<Gender, Long> {
}
