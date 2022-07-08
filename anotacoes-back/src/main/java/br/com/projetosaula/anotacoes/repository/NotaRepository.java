package br.com.projetosaula.anotacoes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.projetosaula.anotacoes.data.entity.NotaEntity;

@Repository
public interface NotaRepository extends JpaRepository<NotaEntity, Integer> {
	
	public List<NotaEntity> findByTituloContaining(String titulo);
}
